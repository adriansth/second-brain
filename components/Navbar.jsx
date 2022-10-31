export default function Navbar() {
    return(
        <div className='w-full flex border-b'>
            <div className='w-[15%] border-r p-5'>
                <span>Logo</span>
            </div>
            <div className='w-[85%] p-5'>
                <span>Everything else</span>
            </div>
        </div>
    );
}