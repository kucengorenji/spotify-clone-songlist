import style from "./style.module.css"

const PlaylistForm = ({ form, handleSubmit, handleFormChanges }) => {
    return (
      <div className={style.wrapper}>
        <h3>Create Playlist</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            minLength="10"
            onChange={handleFormChanges}
            value={form.title}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            minLength="10"
            onChange={handleFormChanges}
            value={form.description}
          ></textarea>
          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
  
  export default PlaylistForm;