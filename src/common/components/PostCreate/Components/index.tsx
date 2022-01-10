import { Dialog, Transition } from '@headlessui/react';
import ImageComponent from 'common/components/Image/components';
import PostCarouselComponent from 'common/components/PostCarousel/components';
import useAppSelector from 'hooks/useAppSelector';
import { Fragment } from 'react';
import { selectAuthCurrent } from 'store/auth/selectors';

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostCreateComponent: React.FC<Props> = ({ isOpen, setIsOpen }) => {
	const authCurrent = useAppSelector(selectAuthCurrent);

	const closeModal = () => {
		setIsOpen(false);
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
							</div>
							<div className="flex w-full h-full">
								<div className="border-t-2 border-gray-300 w-full">
									<PostCarouselComponent
										images={[
											{
												id: 1,
												url: '/images/libeyondea.png',
												created_at: '2020-06-01T00:00:00.000Z',
												updated_at: '2020-06-01T00:00:00.000Z'
											}
										]}
									/>
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
									<textarea rows={8} className="w-80 mx-4" placeholder="Enter content"></textarea>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default PostCreateComponent;
