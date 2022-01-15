import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import ImageComponent from 'common/components/Image/components';
import PostCarouselComponent from 'common/components/PostCarousel/components';
import useAppSelector from 'hooks/useAppSelector';
import { Fragment, useState } from 'react';
import imageService from 'services/imageService';
import { selectAuthCurrent } from 'store/auth/selectors';

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostCreateComponent: React.FC<Props> = ({ isOpen, setIsOpen }) => {
	const authCurrent = useAppSelector(selectAuthCurrent);

	const [loadImg, setLoadImg] = useState<Array<unknown>>([]);
	const [state, setState] = useState<string>('upload');
	const [images, setImages] = useState<Array<File>>([]);

	const onChangeFile = (e: any) => {
		try {
			console.log(e.target.files);
			let file = e.target.files[0];
			let reader = new FileReader();
			if (file) {
				reader.onloadend = () => {
					//setLoadImg(reader.result);
					console.log(reader.result);
				};
				reader.readAsDataURL(file);
				//setFieldValue(props.name, file);
				//e.target.value = null;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const readFileContents = async (file: File) => {
		return new Promise((resolve, reject) => {
			let fileReader = new FileReader();
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = reject;
			fileReader.readAsDataURL(file);
		});
	};

	const readAllFiles = async (AllFiles: Array<File>) => {
		const results = await Promise.all(
			AllFiles.map(async (file) => {
				const fileContents = await readFileContents(file);
				return fileContents;
			})
		);
		console.log(results, 'resutls');
		return results;
	};

	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		let AllFiles: Array<File> = [];

		//!!e.currentTarget.files?.length && [...e.currentTarget.files].map((file) => AllFiles.push(file));

		if (!!e.currentTarget.files?.length) {
			for (let i = 0; i < e.currentTarget.files.length; i++) {
				AllFiles.push(e.currentTarget.files[i]);
			}
		}

		readAllFiles(AllFiles)
			.then((result) => {
				let allFileContents: Array<unknown> = [];
				result.map((res) => allFileContents.push(res));
				setLoadImg(allFileContents);
				setImages(AllFiles);
			})
			.catch((err) => {});
	};

	const closeModal = () => {
		if (window.confirm('Are you remove?')) {
			// Save it!
			setIsOpen(false);
			setLoadImg([]);
		} else {
			// Do nothing!
		}
	};

	const uploadImageBtn = () => {
		Promise.all(
			images.map(async (value) => {
				try {
					const res = await imageService.imageUpload(value);
					return res.data;
				} catch (err) {
					return err;
				}
			})
		)
			.then((values) => {
				console.log(values);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
				<div className="min-h-screen text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 transition-opacity bg-black opacity-50" />
					</Transition.Child>
					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="inline-block h-screen align-middle" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-md">
							<div className="py-2">
								<h2 className="text-center font-medium text-lg">New post</h2>
								<button type="button" onClick={uploadImageBtn}>
									Next
								</button>
							</div>
							<div className="flex flex-col sm:flex-row w-full h-full">
								{state === 'upload' && (
									<>
										{!loadImg.length && (
											<input
												onChange={(e) => handleUpload(e)}
												type="file"
												multiple
												accept=".png, .jpg, .jpeg .gif"
											/>
										)}
										{!!loadImg.length && (
											<PostCarouselComponent
												images={loadImg.map((res: any) => ({
													id: Math.random(),
													url: res,
													created_at: new Date().toDateString(),
													updated_at: new Date().toDateString()
												}))}
											/>
										)}
									</>
								)}
								{state === 'write' && (
									<>
										<div className="border-t-2 border-gray-300 w-full text-center">
											{!!loadImg.length && (
												<PostCarouselComponent
													images={loadImg.map((res: any) => ({
														id: Math.random(),
														url: res,
														created_at: new Date().toDateString(),
														updated_at: new Date().toDateString()
													}))}
												/>
											)}
										</div>
										<div className="border-t-2 border-l-2 border-gray-300">
											<div className="flex items-center flex-grow flex-shrink m-4">
												<div className="flex-none">
													<ImageComponent
														src={authCurrent.user?.avatar_url}
														className="mx-auto rounded-full h-8 w-8"
													/>
												</div>
												<div className="flex items-center flex-grow flex-shrink ml-4 text-sm">
													<span className="text-gray-800 font-medium">
														<div className="block relative">{authCurrent.user?.user_name}</div>
													</span>
												</div>
											</div>
											<textarea
												rows={8}
												className="w-80 mx-4 p-0 border-0 focus:outline-none focus:border-transparent focus:shadow-none focus:shadow-transparent focus:ring-0"
												placeholder="Enter content"
											></textarea>
										</div>
									</>
								)}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default PostCreateComponent;
