export const Title = ({ children, color, align }: any) => {
  return (
    <h1
      className={
        'font-poppins text-4xl md:text-5xl lg:text-7xl font-bold ' +
        color +
        ` text-${align}`
      }
    >
      {children}
    </h1>
  );
};

export const Subtitle = ({ children, color, align }: any) => {
  return (
    <h2
      className={
        'font-poppins text-3xl md:text-4xl font-bold ' +
        color +
        ` text-${align}`
      }
    >
      {children}
    </h2>
  );
};

export const Large = ({ children, color }: any) => {
  return (
    <p className={'font-montserrat text-xl font-semibold ' + color}>
      {children}
    </p>
  );
};

export const LargeBold = ({ children, color }: any) => {
  return (
    <p className={'font-montserrat text-xl font-bold ' + color}>{children}</p>
  );
};

export const Body = ({ children, color }: any) => {
  return (
    <p className={'font-montserrat text-base font-normal ' + color}>
      {children}
    </p>
  );
};

export const BodyBold = ({ children, color }: any) => {
  return (
    <p className={'font-montserrat text-base font-bold ' + color}>{children}</p>
  );
};

export const Small = ({ children, color, md }: any) => {
  return (
    <p className={'font-montserrat text-xs font-semibold ' + color + ` ${md}`}>
      {children}
    </p>
  );
};
