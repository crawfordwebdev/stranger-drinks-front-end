import { useState, useRef, useEffect } from "react"

const AddIngredient = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: 0
  })

	const [photoData, setPhotoData] = useState({})

	const handleChangePhoto = evt => {
		setPhotoData({ photo: evt.target.files[0] })
	}

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddIngredient(formData, photoData.photo)
  }

	return (
		<>
			<h1>Add Ingredient</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Ingredient Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Puppy's Breed (required)
					</label>
					<select 
						type="text"
						name="type"
            value={formData.breed}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Puppy's Age
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
            value={formData.age}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Upload Photo
					</label>
					<input 
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Puppy
					</button>
				</div>
			</form>
		</>
	)
}

export default AddIngredient