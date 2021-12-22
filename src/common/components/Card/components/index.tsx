import classNames from 'classnames';

type Props = {
	children: React.ReactNode;
	header?: string;
	className?: string;
};

const CardComponent: React.FC<Props> = ({ children, header, className }) => {
	return (
		<div className={classNames('shadow-lg rounded-md p-4 bg-white w-full', className)}>
			{header && <div className="font-bold text-md text-black mb-4">{header}</div>}
			<div className="w-full">{children}</div>
		</div>
	);
};

export default CardComponent;
