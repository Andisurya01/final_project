// eslint-disable-next-line react/prop-types
const FilterCourseHome = ({title}) => {
    return (
        <button className="bg-LIGHTBLUE py-1 px-5 rounded-2xl hover:bg-DARKBLUE05 hover:text-white active:bg-DARKBLUE05 active:text-white">
            <p className="text-xs">{title}</p>
        </button>
    )
}

export default FilterCourseHome