import React from 'react'

function CreateForm() {
  return (
    <>
        <form>
            <label>
                Name*
            </label>
            <input type="text" />
            <label>
                Key*
            </label>
            <input type="text" />
            <label>
                Description
            </label>
            <input type="text" />
        </form>
    </>
  )
}

export default CreateForm