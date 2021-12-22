type Props = {
	src?: string;
	alt?: string;
	className?: string;
};

const ImageComponent: React.FC<Props> = ({ src, alt, className, ...props }) => (
	<img src={src} alt={alt} className={className} {...props} />
);

export default ImageComponent;
