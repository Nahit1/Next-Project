const InfoBox = ({
  heading,
  bacgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${bacgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`${buttonInfo.bacgroundColor}inline-block bg-black text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
