import { useState, useRef, useEffect } from "react"

const AddReview = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    rating: 0,
  })

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddReview(formData)
  }

	return (
		<>
			<h1>Add Review</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Title (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="title-input"
						name="title"
            value={formData.title}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="type-input" className="form-label">
						Content (required):
					</label>
					<input 
						type="text"
						className="form-control"
						id="content-input"
						name="content"
            value={formData.content}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Rating:
					</label>
					<input 
						type="number"
						className="form-control"
						id="rating-input"
						name="rating"
            value={formData.rating}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Review
					</button>
				</div>
			</form>
		</>
	)
}

export default AddReview