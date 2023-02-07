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

// export const SpanError = styled.span`
//   color: var(--danger);
//   margin-top: 14px;
//   text-align: center;
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
// `;

export const SpanError = ({children, margin} : any) => {
  return (
    <span className={`text-red-500 text-center font-bold font-montserrat ${margin}`}>{children}</span>
  )
}
export const SpanSuccess = ({children, margin} : any) => {
  return (
    <span className={`text-green-500 text-center font-bold font-montserrat ${margin}`}>{children}</span>
  )
}
