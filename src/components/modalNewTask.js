import React from "react";
import { useDropzone } from "react-dropzone";
import { Line } from 'rc-progress';

export default function NewTask({handleClose}) {
	// const fileUpload = React.useRef();
	const [ name, setName ] = React.useState("");
	const [ progress, setProgress] = React.useState(0);
	const [ handle, setHandle ] = React.useState("");
	const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
	
	const simulateUpload = () => {
		setProgress((prev) => prev + 20);
	}

	React.useEffect(() => {
		if (acceptedFiles.length) {
			setName(acceptedFiles[0].name);
			setHandle(setInterval(simulateUpload, 3000));
		}
	}, [ acceptedFiles ])



	return (
		<>
			<div className="relative">
				<div className="z-50 absolute top-1/2 left-1/3 transform -translate-x-1/3	-translate-y-1/2 bg-white rounded-2xl" onClick={() => console.log("ANJING")}>
					<div className="flex flex-col">
						<div className="p-10 flex flex-row items-center justify-center rounded-tr-2xl rounded-tl-2xl" style={{height: "1vh", backgroundColor: "#6b7cfc"}}>
							<p className="text-2xl text-white">Add Task</p>
						</div>
						<div className="p-10 grid grid-row-4 gap-5">
							<div className="grid grid-cols-2 gap-2">
								<p>Tanggal</p>
								<p>Jam</p>
								<input type="text" className="border-2 border-gray-300 border-opacity-100 rounded-sm" name="tanggal"/>
								<input type="text" className="border-2 border-gray-300 border-opacity-100 rounded-sm" name="jam"/>
							</div>
							<div className="grid grid-cols-1">
								<p>Pekerjaan</p>
								<textarea className="rounded-lg w-96 h-32 border-2 border-gray-300 rounded-m border-opacity-100"></textarea>
							</div>
							<div className="grid grid-cols-1 gap-4">
								{ name.length > 1 &&
									<React.Fragment>
										<div className="flex flex-row justify-between">
											<p>{name}</p>
											<p style={{color: "#157af0"}}>{progress}%</p>
										</div>
										<Line percent={progress} strokeWidth="2" strokeColor="#157af0" />
									</React.Fragment>
								}
								<div {...getRootProps({className: "dropzone rounded-lg w-96 h-32 border-2 border-dashed border-gray-300 border-opacity-100 flex flex-col items-center justify-center"})}>
									<input {...getInputProps()} />
									<div className="flex flex-col items-center">
										<span className="material-icons">cloud_upload</span>
										<p style={{color: "#157af0"}}>Upload file</p>
									</div>
								</div>
								<button className="rounded-lg mx-auto bg-blue-500 w-1/2 h-10 text-white" onClick={handleClose}>Tambah</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="z-10 fixed left-0 top-0 bg-black w-screen h-screen bg-opacity-25" onClick={handleClose}>
			</div>
		</>
	)
}