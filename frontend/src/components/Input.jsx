export function Input({text, placeholder, onChange}) {

    return <>
        <div className="flex flex-col py-2 ">
            <label className="text-gray-800">{text}</label>
            <input type="text" placeholder={placeholder} className="border border-gray-300 rounded px-2 py-1 placeholder:text-sm focus:outline-blue-300 text-gray-500" onChange={onChange}/>
        </div>
    </>
}