import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import classNames from 'classnames';
import ImageComponent from 'common/components/Image/components';
import { useState } from 'react';

type Props = {
	images: Array<any>;
};

const PostCarouselComponent: React.FC<Props> = ({ images }) => {
	const [currentImageIdx, setCurrentImagIdx] = useState(0);

	const prevSlide = () => {
		// find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
		const resetToVeryBack = currentImageIdx === 0;

		const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

		// assign the logical index to current image index that will be used in render method
		setCurrentImagIdx(index);
	};

	const nextSlide = () => {
		// check if we need to start over from the first index
		const resetIndex = currentImageIdx === images.length - 1;

		const index = resetIndex ? 0 : currentImageIdx + 1;

		// assign the logical index to current image index that will be used in render method
		setCurrentImagIdx(index);
	};

	// create a new array with 5 elements from the source images
	const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + 3);

	// check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
	const imageSourcesToDisplay =
		activeImageSourcesFromState.length < 3
			? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
			  [...activeImageSourcesFromState, ...images.slice(0, 3 - activeImageSourcesFromState.length)]
			: activeImageSourcesFromState;

	return (
		<div>
			<div className="relative">
				{imageSourcesToDisplay.map((image, index) => (
					<ImageComponent
						src={image.url}
						className={classNames('max-h-96 w-full object-cover', { block: index === 2, hidden: index !== 2 })}
						key={index}
					/>
				))}
				<button type="button" onClick={prevSlide} className="top-1/2 left-0 absolute p-4 -translate-y-2/4 text-gray-200">
					<FaChevronCircleLeft className="h-6 w-6" />
				</button>
				<button type="button" onClick={nextSlide} className="top-1/2 right-0 absolute p-4 -translate-y-2/4 text-gray-200">
					<FaChevronCircleRight className="h-6 w-6" />
				</button>
			</div>
			<div className="flex justify-center mt-4 space-x-1">
				{images.map((image, index) =>
					currentImageIdx === index ? (
						<div className="rounded-full h-2 w-2 bg-blue-600" key={index} />
					) : (
						<div className="rounded-full h-2 w-2 bg-gray-300" key={index} />
					)
				)}
			</div>
		</div>
	);
};

export default PostCarouselComponent;
