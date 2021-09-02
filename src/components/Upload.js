import React, {useState} from 'react';

function Upload(){
	const [selectedFile, setSelectedFile] = useState();
	const [sentFile, setSentFile] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setSentFile(true);
	};

	const handleSubmission = () => {
	};

	return(
   <div className ="upload">
			<input type="file" name="file" onChange={changeHandler} />
			{sentFile ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p></p>
			)}
			<div>
				<button onClick={handleSubmission}>Confirm Selection</button>
			</div>
		</div>
	)
}

export default Upload;