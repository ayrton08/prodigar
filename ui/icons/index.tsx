import { string } from "yup";

//size with tailwind format ("w-9 h-9")
export const Logo = ({ size }: any) => {
  return (
    <div className={size}>
      <svg viewBox="0 0 174.09 174.41">
        <path
          d="M86.88 174.4c-49-1.35-87-38.55-86.88-87.5S38.28-.1 87.21 0s87 38.39 86.89 87.22c-.11 49.1-38.49 86.03-87.22 87.18Z"
          fill="#8fccfe"
        />
        <path
          d="M21.08 104.73a40.47 40.47 0 0 1 1-8.36 34 34 0 0 1 6.16-1.83c7.46-1.32 15-2.45 22.48-3.34s14.43.76 21.32 3.39c10.87 4.14 22.08 5.84 33.75 6.82 10.48.89 18.84-3.78 28.11-6.08 4-1 7.76-2.56 12.06-1.42a7.75 7.75 0 0 1 6 5.93c.79 3.15-1 5.51-3.56 7-9.46 5.5-19.81 9-29.89 13.13-2.45 1-5.07 1.65-7.38 2.88-13.75 7.33-27.58 3.58-41.44.52-6.91-1.52-13.84-3.06-20.81-4.28-5.5-1-10.89.63-16.07 2.14-1.94.56-3.77 1-3.77 1a28.62 28.62 0 0 1-4-4.29 31.88 31.88 0 0 1-3.96-13.21Z"
          fill="#fefefe"
        />
        <path
          d="M88.17 46.41a16.29 16.29 0 0 1 9.48 3.78c1.15 1 2.91 2.32 2.91 2.32s1.67-1.43 2.79-2.28c10.23-7.78 23.12-2.56 24.44 9.82.68 6.33-2.39 11.59-6.2 16.22a67.78 67.78 0 0 1-18.09 15.3l-3 1.78s-2-1-3.26-1.84c-9.06-5.9-17.8-12.15-22.46-22.4-4.99-11.01 1.72-22.69 13.39-22.7Z"
          fill="#fefefe"
        />
        <path
          d="M73.27 113.11c10.73 3.89 23.56 4.22 34.25 5.71-7.77 4.29-17.83 3.18-25.4 1.68-8.89-1.77-17.76-3.65-26.61-5.58a46.31 46.31 0 0 0-21.11 0c-1.49.37-4.22 1.16-4.22 1.16a23.09 23.09 0 0 1-2.73-5.79 26.4 26.4 0 0 1-.45-7.38c.07-.86.33-2.26.33-2.26s1.49-.46 2.41-.65c15.49-3.25 30.87-5.41 46.21 1.08 8.9 3.76 18.28 4.84 28.06 5 2.66 0 4.24-.48 6.36-.18a4.53 4.53 0 0 1 3.74 4.27c0 2.25-2 3-3.77 3.26-7.61 1.33-15.13 0-22.64-1-4.48-.52-8.96-2.32-14.43.68Z"
          fill="#8fccfe"
        />
        <path
          d="M118.5 115.15a13 13 0 0 0 1.09-4.57 8.58 8.58 0 0 0-2-5.24c2.65-.82 7.88-2.51 10.46-3.41a58.85 58.85 0 0 1 14.21-3c1.62-.12 3.92-.4 4.37 1.49s-1.57 2.62-2.9 3.21c-8.02 3.6-17.16 8.04-25.23 11.52Z"
          fill="#90cdfe"
        />
        <path
          d="M87.94 52.17c3.46-.42 6.2 1.89 8.82 4.08a42.06 42.06 0 0 0 3.8 2.82s2.38-1.77 3.57-2.81a19.3 19.3 0 0 1 4-2.83c4-1.95 8.1-2.25 11.49 1.05s3.75 7.18 2 11.43c-3.8 9.42-11.56 15-19.62 20.3l-1.52 1s-1.08-.61-1.65-1c-7.54-4.89-14.56-10.29-18.92-18.45a13.85 13.85 0 0 1-1.23-8.68c.62-4.31 4.09-6.91 9.26-6.91Z"
          fill="#8eccfe"
        />
        <circle
          cx="87.05"
          cy="86.9"
          r="83.46"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth="2px"
        />
      </svg>
    </div>
  );
};

export const Instagram = ({ size, hover, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-instagram ${size} ${color} ${hover}`}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
};

export const Facebook = ({ size, hover, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-facebook ${size} ${hover} ${color}`}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
};

export const Edit = ({ size, hover, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-edit ${size} ${hover} ${color}`}
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
};

export const Remove = ({ size, hover, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-trash-2 ${size} ${hover} ${color}`}
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  );
};

export const Location = ({ size, hover, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-map-pin ${size} ${hover} ${color}`}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
};

export const X = ({ size, hover, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-x ${size} ${hover} ${color}`}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};
