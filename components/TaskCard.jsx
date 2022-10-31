export default function TaskCard(props) {
    return(
        <div className='p-5 border shadow-lg rounded-lg hover:bg-blue-100 cursor-pointer w-full select-none border'>
            {/* Title and status */}
            <div className='mb-3 flex items-center justify-between'>
                <h3 className='font-bold text-xs md:text-md'>{props.title}</h3>
            </div>
            <p className='text-xs md:text-md text-gray-700 pb-3'>{props.description}</p>
            <p className='hidden md:block text-xs text-gray-400 text-gray-400'>{props.createdAt}</p>
        </div>
    );
}