export const Filter = () => {
  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 mr-2 rounded-full bg-gray-700 px-5 py-2 text-white"
      >
        All
      </button>

      <button
        type="button"
        className="bg-blue-500 mr-2 rounded-full border border-gray-200 bg-white px-5 py-2"
      >
        Pending
      </button>

      <button
        type="button"
        className="bg-blue-500 mr-2 rounded-full  border border-gray-200 bg-white px-5 py-2"
      >
        Add
      </button>
    </div>
  )
}
