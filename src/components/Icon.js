import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const WhatsappIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    viewBox="0 0 48 48"
    {...rest}
  >
    <title>{"Whatsapp-color"}</title>
    <path
      fill="#67C15E"
      fillRule="evenodd"
      d="M23.993 0C10.763 0 0 10.765 0 24a23.824 23.824 0 0 0 4.57 14.067l-2.99 8.917 9.224-2.948A23.81 23.81 0 0 0 24.007 48C37.237 48 48 37.234 48 24S37.238 0 24.007 0h-.014Zm-6.7 12.19c-.466-1.114-.818-1.156-1.523-1.185a13.55 13.55 0 0 0-.804-.027c-.918 0-1.877.268-2.455.86-.705.72-2.454 2.398-2.454 5.841s2.51 6.773 2.849 7.239c.353.465 4.895 7.632 11.947 10.553 5.515 2.286 7.152 2.074 8.407 1.806 1.834-.395 4.133-1.75 4.711-3.386.579-1.637.579-3.034.41-3.33-.17-.296-.636-.465-1.34-.818-.706-.353-4.134-2.046-4.783-2.272-.634-.24-1.24-.155-1.72.522-.677.946-1.34 1.905-1.876 2.483-.423.452-1.115.509-1.693.268-.776-.324-2.948-1.086-5.628-3.47-2.074-1.849-3.484-4.148-3.893-4.84-.41-.705-.042-1.114.282-1.495.353-.438.691-.748 1.044-1.157.352-.41.55-.621.776-1.1.24-.466.07-.946-.1-1.3-.168-.352-1.579-3.795-2.157-5.191Z"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    fill="none"
    viewBox="0 0 32 32"
    {...rest}
  >
    <rect width={28} height={28} x={2} y={2} fill="#1275B1" rx={14} />
    <path
      fill="#fff"
      d="M12.619 9.692c0 .935-.81 1.692-1.81 1.692C9.81 11.384 9 10.627 9 9.692 9 8.758 9.81 8 10.81 8c.998 0 1.809.758 1.809 1.692ZM9.247 12.628h3.093V22H9.247v-9.372ZM17.32 12.628h-3.093V22h3.093v-4.795c0-1.107.378-2.22 1.886-2.22 1.705 0 1.695 1.45 1.687 2.572-.01 1.467.014 2.965.014 4.443H24v-4.946c-.026-3.159-.85-4.614-3.557-4.614-1.608 0-2.604.73-3.123 1.39v-1.202Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    fill="none"
    viewBox="0 0 48 48"
    {...rest}
  >
    <circle cx={24} cy={24} r={20} fill="#C13584" />
    <path
      fill="#fff"
      d="M24 14.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228-.218.56-.478.96-.898 1.38-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.057-1.645.07-4.849.07s-3.584-.013-4.849-.07c-1.17-.054-1.805-.249-2.228-.413a3.718 3.718 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.85 0-3.203.012-3.583.07-4.848.054-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07ZM24 12c-3.259 0-3.668.014-4.948.072-1.277.059-2.15.261-2.912.558a5.88 5.88 0 0 0-2.126 1.384 5.88 5.88 0 0 0-1.384 2.126c-.297.763-.5 1.635-.558 2.912C12.014 20.332 12 20.741 12 24c0 3.259.014 3.668.072 4.948.059 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126a5.88 5.88 0 0 0 2.126 1.384c.763.297 1.635.5 2.912.558 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.88 5.88 0 0 0 2.126-1.384 5.882 5.882 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.277-.261-2.15-.558-2.912a5.881 5.881 0 0 0-1.384-2.126 5.88 5.88 0 0 0-2.125-1.384c-.764-.297-1.636-.5-2.913-.558C27.668 12.014 27.259 12 24 12Z"
    />
    <path
      fill="#fff"
      d="M24.006 17.843a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM31.85 17.596a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
    />
  </svg>
);

export const CellphoneIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    xmlSpace="preserve"
    viewBox="0 0 392.663 392.663"
    {...rest}
  >
    <path
      d="M179.2 71.628H32.711c-6.012 0-10.925 4.848-10.925 10.925v277.333c0 6.012 4.848 10.925 10.925 10.925H179.2c6.012 0 10.925-4.848 10.925-10.925V82.489c-.064-6.012-4.913-10.861-10.925-10.861z"
      style={{
        fill: "#56ace0",
      }}
    />
    <path
      d="M303.968 21.851c-36.784 0-66.78 24.501-66.78 54.626 0 10.796 3.943 21.333 11.442 30.384 2.715 3.232 3.232 7.822 1.487 11.572l-8.792 18.618 27.345-10.925c2.715-1.034 5.301-1.034 7.822-.065 8.727 3.232 18.036 4.913 27.604 4.913 36.784 0 66.78-24.501 66.78-54.626-.129-29.996-30.124-54.497-66.908-54.497z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M303.968.065c-48.808 0-88.566 34.327-88.566 76.412 0 13.705 4.202 26.893 12.154 38.659l-15.709 33.099V82.554c0-18.036-14.675-32.711-32.711-32.711H32.711C14.675 49.713 0 64.453 0 82.489v277.398c0 18.036 14.675 32.711 32.711 32.711H179.2c18.036 0 32.711-14.675 32.711-32.711V165.56c2.844 2.651 7.046 3.943 11.313 2.263l49.713-19.782c9.956 3.232 20.428 4.848 31.16 4.848 48.808 0 88.566-34.327 88.566-76.412C392.533 34.392 352.84.065 303.968.065zM190.061 359.887c0 6.012-4.848 10.925-10.925 10.925H32.711c-6.012 0-10.925-4.848-10.925-10.925V82.489c0-6.012 4.848-10.925 10.925-10.925H179.2c6.012 0 10.925 4.848 10.925 10.925l-.064 277.398zm113.907-228.849c-9.503 0-18.747-1.616-27.604-4.913-2.521-.905-5.107-.905-7.822.065l-27.345 10.925 8.792-18.618c1.745-3.814 1.228-8.339-1.487-11.572-7.434-9.051-11.442-19.523-11.442-30.384 0-30.125 29.931-54.626 66.78-54.626 36.784 0 66.78 24.501 66.78 54.626.127 29.996-29.868 54.497-66.652 54.497z"
      style={{
        fill: "#194f82",
      }}
    />
    <path
      d="M329.503 66.069a9.037 9.037 0 0 0-9.051-9.051c-3.038 0-5.883 1.552-7.564 4.073-5.107 7.176-14.352 5.883-18.23 0-1.681-2.521-4.461-4.073-7.564-4.073a9.037 9.037 0 0 0-9.051 9.051c0 6.271 12.412 21.269 25.665 33.487 14.353-13.447 25.795-27.928 25.795-33.487z"
      style={{
        fill: "#ffc10d",
      }}
    />
    <path
      d="M320.453 35.232c-6.012 0-11.83 1.745-16.679 4.848-4.848-3.168-10.667-4.848-16.679-4.848-17.002 0-30.836 13.834-30.836 30.836 0 21.204 31.095 48.549 40.598 56.436 3.62 3.232 10.602 3.232 13.964-.065 9.503-7.952 40.469-35.685 40.469-56.307-.001-17.065-13.835-30.9-30.837-30.9zm-42.409 30.837a9.037 9.037 0 0 1 9.051-9.051c3.038 0 5.883 1.552 7.564 4.073 3.879 5.883 13.123 7.176 18.23 0 1.681-2.521 4.461-4.073 7.564-4.073a9.037 9.037 0 0 1 9.051 9.051c0 5.56-11.442 20.105-25.729 33.487-13.318-12.283-25.731-27.217-25.731-33.487zM163.297 241.907h-14.61c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925-.064-6.012-4.978-10.925-10.925-10.925zM163.297 283.475h-14.61c-6.012 0-10.925 4.848-10.925 10.925s4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925-.064-6.012-4.978-10.925-10.925-10.925zM163.297 324.978h-14.61c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925-.064-5.947-4.978-10.925-10.925-10.925z"
      style={{
        fill: "#194f82",
      }}
    />
    <path
      d="M59.539 109.317h92.703v84.622H59.539z"
      style={{
        fill: "#ffc10d",
      }}
    />
    <path
      d="M163.297 87.531H48.679c-6.012 0-10.925 4.848-10.925 10.925v106.408c0 6.012 4.848 10.925 10.925 10.925h114.618c6.012 0 10.925-4.848 10.925-10.925V98.457c-.064-6.077-4.978-10.926-10.925-10.926zm-10.99 106.408H59.539v-84.622h92.768v84.622zM63.289 241.907h-14.61c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925 0-6.076-4.978-10.925-10.925-10.925zM113.261 241.907h-14.61c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925 0-6.012-4.978-10.925-10.925-10.925zM63.289 283.475h-14.61c-6.012 0-10.925 4.848-10.925 10.925s4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925-.065-6.012-4.978-10.925-10.925-10.925zM113.261 283.475h-14.61c-6.012 0-10.925 4.848-10.925 10.925s4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925 0-6.012-4.978-10.925-10.925-10.925zM63.289 324.978h-14.61c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925-.065-5.947-4.978-10.925-10.925-10.925zM113.261 324.978h-14.61c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h14.61c6.012 0 10.925-4.848 10.925-10.925 0-5.947-4.978-10.925-10.925-10.925z"
      style={{
        fill: "#194f82",
      }}
    />
    <path
      d="M87.079 144.226h37.818c6.012 0 10.925-4.848 10.925-10.925a10.87 10.87 0 0 0-10.925-10.925H87.079c-6.012 0-10.925 4.848-10.925 10.925 0 6.077 4.913 10.925 10.925 10.925zM87.079 181.333h37.818c6.012 0 10.925-4.848 10.925-10.925s-4.848-10.925-10.925-10.925H87.079c-6.012 0-10.925 4.848-10.925 10.925s4.913 10.925 10.925 10.925z"
      style={{
        fill: "#194f82",
      }}
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500px"
    height="500px"
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
    className={`w-100 h-auto ${className}`}
    {...rest}
  >
    <path d="M337.658 655.319c-10.223-12.973-20.225-25.668-30.235-38.357-1.426-1.808-2.53-3.167-1.522-6.114 1.085-3.17-.988-6.973-4.085-8.166-2.795-1.077-3.415-2.76-3.983-5-5.678-22.42-11.34-44.844-17.017-67.265-.571-2.256-.907-4.047.898-6.383 2.567-3.323 1.27-7.786.885-11.639-.473-4.715.02-9.286.435-13.907.348-3.857 2.004-7.768-1.854-11.1-1.308-1.13.036-3.18.52-4.724 5.476-17.473 10.802-34.997 16.62-52.356 1.868-5.574 2.047-11.46 4.644-16.994 1.835-3.912 5.093-5.773 7.328-8.815 8.385-11.41 16.953-22.739 24.422-34.739 2.534-4.071 5.726-7.42 8.313-11.303 2.16-3.243 6.085-2.947 8.857-5.142 13.193-10.442 26.629-20.578 40.045-30.734 2.747-2.08 5.72-2.962 9.39-3.709 7.623-1.55 15.827-3.776 21.559-10.126 1.12-1.24 2.448-1.652 3.904-1.911 21.465-3.824 42.938-7.6 64.394-11.47 1.958-.354 3.17.213 4.89 1.21 3.506 2.034 7.814 2.328 11.248.017 1.802-1.214 3.08-1.448 4.907-1.013 22.992 5.472 45.989 10.92 68.978 16.401 2.126.507 3.447 1.474 4.499 3.883 1.241 2.844 4.644 5.061 7.75 2.626 2.932-2.3 4.466-.797 6.4.799 13.107 10.814 26.216 21.625 39.3 32.466 9.108 7.545 18.172 15.142 27.264 22.705 1.714 1.426 3.495 2.722 1.708 5.335-1.239 1.813.326 3.148 1.186 4.473 7.238 11.164 13.829 22.736 21.705 33.505 3.174 4.34 4.265 9.608 5.363 15.026 1.773 8.754 5.293 17.146 7.93 25.736 1.922 6.254 6.32 11.93 5.565 18.773-.63 5.707-.034 11.265.235 16.9.635 13.302 1.064 26.614 1.618 39.92.065 1.572-.402 2.735-1.308 4.083-2.657 3.953-3.919 8.324-1.697 12.936 1.042 2.162.027 3.922-.637 5.73-6.72 18.286-13.37 36.6-20.354 54.785-1.683 4.383-.827 6.856 2.892 9.588 14.636 10.748 29.052 21.794 43.536 32.747 2.411 1.824 5.912 3.122 2.476 7.24-2.636 3.16-4.61 7.09-9.19 2.496-.31-.31-.87-.37-1.353-.562-.64 18.788-11.71 32.253-27.9 34.048-14.591 1.618-30.702-9.558-34.596-23.999-4.434-16.447 3.566-29.852 23.08-38.62.164-1.697-1.357-2.119-2.32-2.862-4.617-3.562-9.374-6.948-13.91-10.607-1.933-1.559-5.946-2.728-4.617-5.602 1.464-3.168 2.74-7.888 8.091-7.29 1.864.209 2.188-1.373 2.613-2.506 5.675-15.123 13.238-29.877 16.394-45.518 3.74-18.527 8.103-37.422 5.113-56.827-1.007-6.535-.512-13.296-.779-19.951-.489-12.213-6.582-22.989-9.007-34.668-4.546-21.898-18.703-38.725-29.04-57.62-9.054-16.549-24.69-25.792-37.903-37.792-11.097-10.078-23.92-17.013-37.293-23.784-20.132-10.193-41.78-14.224-63.228-18.987-9.674-2.148-20.217-.162-30.35-.504-18.36-.619-36.307 3.184-53.322 8.603-24.55 7.817-47.4 19.602-67.776 36.336-13.304 10.926-25.361 22.307-34.552 36.86-4.884 7.732-10.422 15.08-16.032 22.317-4.427 5.71-6.41 12.35-8.506 19.007-3.85 12.228-7.175 24.65-11.65 36.642-2.325 6.232-1.279 12.416-1.98 18.572-1.527 13.388-1.155 26.87-.867 40.379.411 19.307 7.854 36.892 11.803 55.304 1.236 5.763 6.072 10.654 8.277 16.327 7.47 19.214 21.734 33.698 33.78 49.74 4.645 6.185 10.026 11.43 16.47 15.794a898.809 898.809 0 0 1 33.01 23.434c5.851 4.36 12.08 7.458 19.114 9.33 11.745 3.126 23.333 6.852 35.109 9.849 16.415 4.178 33.246 4.647 50.054 4.182 28.128-.779 54.687-7.777 80.513-19.115 18.387-8.072 32.733-21.57 49.142-32.246 7.082-4.607 11.578-11.361 16.494-17.842 2.92-3.85 6.027-7.573 8.699-11.586 2.243-3.368 4.19-3.88 7.55-1.26 5.755 4.485 5.914 4.296 1.495 10.162-6.783 9.004-13.882 17.793-20.214 27.103-2.445 3.595-6.311 3.07-9.113 5.226-6.863 5.281-13.912 10.32-20.873 15.473-4.15 3.073-8.163 6.345-12.443 9.221-3.937 2.646-7.026 6.534-12.96 6.015-3.223-.282-6.863 2.294-10.067 4.037-13.166 7.16-27.645 10.53-42.003 13.702-14.084 3.111-28.531 4.776-43.087 4.353-3.423-.1-7.074-.742-8.743 3.762-.677 1.828-2.613.975-4.002.578-30.73-8.79-61.45-17.61-92.176-26.408-2.439-.698-4.453-1.576-3.576-4.773.719-2.62-1.54-3.492-3.063-4.584-7.173-5.146-13.995-11.007-21.755-15.056-10.879-5.675-18.887-13.817-25.527-24.2m373.149 22.968c6.67-9.326 6.719-18.576.136-25.89-7.512-8.345-18.258-10.804-26.427-5.783-7.233 4.445-11.155 10.921-10.133 19.59 1.012 8.581 6.316 14.2 14.033 17.257 8.12 3.216 15.655 1.84 22.39-5.174z" />
    <path d="M283.466 347.146c-14.365 10.004-14.622 23.033-.91 33.074 6.984 5.114 13.993 10.213 21.213 14.983 3.562 2.354 3.745 4.371 1.179 7.554-3.056 3.791-7.099 6.968-7.894 12.31-.287 1.924-2.198 2.208-3.936 2.409-4.79.554-9.558 1.391-14.361 1.72-2.907.198-4.582 1.215-5.431 4.049-3.391 11.316-6.841 22.616-10.412 33.876-.675 2.128-.149 3.452 1.419 4.782 3.047 2.585 5.805 5.566 9.066 7.829 4.5 3.122 5.249 6.776 2.924 11.466-.65 1.313-1.08 2.736-1.547 3.941-2.357.649-3.304-1.024-4.473-2.068-19.487-17.426-38.845-35-58.5-52.234-3.911-3.428-3.217-6.496-2.023-10.572 1.187-4.055 3.45-5.246 7.483-5.702 24.463-2.768 48.89-5.853 73.328-8.842 1.301-.16 2.68-.114 4.22-1.54-7.357-5.288-14.586-10.518-21.85-15.698-5.83-4.156-11.784-8.141-17.51-12.434-2.04-1.53-6.195-2.27-3.322-6.663 4.054-6.199 4.378-6.454 9.852-3.681 1.438-.914.778-2.39.86-3.61.629-9.499 4.714-17.257 11.883-23.379 7.53-6.43 18.406-7.215 27.96-1.158 10.113 6.41 19.693 13.658 29.535 20.497 2.132 1.481 2.034 2.934.744 5.03-4.33 7.033-4.614 7.189-11.17 2.593-7.362-5.16-14.674-10.394-22.013-15.587-4.851-3.433-10.032-5.204-16.314-2.945m-38.735 97.61c2.94 1.98 4.977 5.228 8.944 6.588 2.991-9.92 6.909-19.229 8.983-30.1-13.36 1.072-25.983 2.403-39.656 4.456 7.724 6.775 14.46 12.683 21.73 19.056zM616.724 326.297c-8.232-6.764-8.264-6.79-1.716-14.745 13.848-16.826 27.825-33.549 41.532-50.489 3.034-3.748 5.207-3.949 8.793-.764 6.961 6.184 14.324 11.914 21.476 17.885 8.514 7.11 14.984 15.598 17.305 26.702 4.236 20.265-10.52 42.647-31.091 47.341-12.184 2.78-23.224-.296-33.062-7.29-7.982-5.676-15.327-12.248-23.237-18.64m18.629.835c4.268 3.435 8.246 7.244 13.16 9.832 13.573 7.148 27.69 4.364 37.14-7.38 9.307-11.563 9.22-25.813-.566-37.4-6.142-7.273-14.28-12.295-21.313-18.417-2.547 1.288-3.854 3.256-5.315 5.03-8.348 10.138-16.638 20.323-24.99 30.456-7.922 9.612-7.946 9.593 1.884 17.879zM268.794 604.346c-10.895.92-17.507-6.192-25.093-12.33-5.566 7.462-11.442 14.012-21.599 13.32-4.223-.287-7.67-2.082-10.618-4.937-8.29-8.026-10.274-24.02-3.623-31.562 4.515-5.119 10.397-6.805 17.199-5.205 6.306 1.484 10.346 6.474 15.945 10.072 5.279-6.493 8.764-13.968 13.236-21.18-3.38-1.99-6.751-1.31-9.93-1.602-2.482-.228-4.828-.394-4.501-3.808.295-3.084-.16-6.923 4.483-6.893 3.799.025 7.66.424 11.37 1.23 3.54.77 5.83-.077 7.22-3.393.192-.458.475-.879.725-1.311 4.599-7.954 5.44-8.113 13.175-2.267-.6 3.25-2.789 5.825-4.51 8.569-1.672 2.664-1.765 4.47.946 6.713 11.178 9.25 15.158 21.514 14.005 35.649-.848 10.396-7.646 17.432-18.43 18.935m-5.8-11.622c7.334.24 11.105-1.902 13.07-7.428 3.435-9.65-1.92-23.322-11.608-28.645-3.567 5.899-7.178 11.811-10.729 17.76-5.617 9.41-5.225 10.894 4.37 16.428 1.279.738 2.73 1.177 4.897 1.885m-48.848-14.78c-1.306 2.513-1.19 5.182-.425 7.735 1.297 4.325 3.424 7.974 8.68 8.203 4.89.213 11.078-4.036 12.425-9.144 1.175-4.454-3.667-5.219-5.632-7.769-.483-.627-1.281-1.04-1.988-1.462-5.333-3.181-8.239-2.769-13.06 2.436zM292.362 710.398c-4.975 3.942-9.753 7.566-14.349 11.408-2.381 1.99-3.892 1.527-5.757-.725-5.148-6.22-5.226-6.16.917-11.044 6.118-4.864 12.241-9.72 19.239-15.276-9.732-1.938-16.807-6.62-21.552-14.524-4.67-7.778-6.473-15.947-3.817-24.861 4.091-13.737 20.176-24.87 34.13-23.542 15.704 1.494 26.19 13.505 28.514 32.804.44 0 .99.168 1.343-.025 4.318-2.365 9.473-.075 10.582 4.773.594 2.595-1.655 3.416-3.119 4.577-15.26 12.1-30.565 24.146-46.13 36.435M280.46 674.93c1.01 1.321 1.92 2.734 3.044 3.949 7.752 8.372 20.135 8.371 29.023.044 8.46-7.926 9.13-19.865 1.578-28.153-7-7.682-17.088-8.65-26.26-2.935-7.805 4.865-13.446 16.042-7.385 27.095zM440.787 742.824c3.341-4.395 6.53-8.46 9.56-12.64 1.77-2.44 3.865-2.869 6.535-1.803 2.794 1.116 6.76.778 7.076 5.078 1.474 20.075 2.848 40.158 4.229 60.24.031.454-.269.93-.404 1.364-8.109.76-10.58-1.435-11.063-9.232-.851-13.749-1.863-27.487-2.918-42.848-6.53 8.598-12.127 15.93-17.68 23.295-3.31 4.39-6.665 8.753-9.775 13.284-1.836 2.674-3.765 3.744-7.093 2.766-3.514-1.032-5.969-2.388-6.207-6.55-.602-10.468-1.44-20.923-2.195-31.383-.299-4.142-.625-8.283-1.051-13.907-2.125 2.607-3.549 4.224-4.83 5.946-7.06 9.49-14.062 19.022-21.13 28.505-4.877 6.543-6.037 6.71-13.387 2.262-.41-1.517.642-2.494 1.413-3.533 11.215-15.12 22.545-30.157 33.599-45.394 2.336-3.22 4.65-3.486 8.044-2.413 3.344 1.058 5.75 1.924 6.041 6.43.9 13.92 2.469 27.797 3.924 43.248 6.198-8.134 11.646-15.284 17.312-22.715zM334.828 283.568c2.825-.412 5.256-.73 8.755-1.19-4.484-5.945-8.543-11.323-12.597-16.706-1.302-1.729-2.549-3.5-3.896-5.192-1.601-2.01-1.075-3.407.787-5.028 6.272-5.461 6.381-5.535 11.383 1.016 14.444 18.919 28.913 37.818 43.228 56.834 1.77 2.352 6.134 4.687 1.248 8.491-5.496 4.28-5.508 4.44-10.863-1.03-1.54 6.61-4.17 12.382-9.097 16.816-9.137 8.22-19.724 11.256-31.428 7.28-11.807-4.01-18.79-13.034-21.54-24.954-3.698-16.03 6.359-31.096 24.02-36.337m25.758 21.467c-1.593-2.754-3.48-5.266-5.94-7.319-10.59-8.843-26.981-4.18-31.383 8.93-2.97 8.85.869 19.092 9.293 24.791 7.3 4.939 16.419 4.37 23.593-1.471 7.165-5.835 8.91-14.669 4.437-24.931zM548.251 235.671c11.85-.643 21.31 3.265 29.173 13.193 2.217-8.622 4.208-16.244 6.133-23.882 1.51-5.99 7.18-7.885 11.887-3.884 1.798 1.529.753 3.405.345 5.097-5.26 21.81-10.565 43.607-15.846 65.41a175.104 175.104 0 0 0-1.632 7.309c-.678 3.436-1.208 6.578-6.23 5.343-6.138-1.508-6.415-1.57-5.515-7.757.041-.285-.184-.609-.292-.912-22.392 7.093-41.107-1.416-45.32-20.658-3.118-14.244 4.512-36.536 27.297-39.259m9.016 52.052c8.67-1.995 13.28-7.983 15.039-16.187 1.533-7.155.522-13.97-5.249-19.282-6.815-6.273-18.025-7.189-25.463-2.134-7.466 5.074-10.917 17.152-7.399 25.894 3.54 8.798 12.333 13.465 23.072 11.709zM641.697 710.674c5.444-4.096 10.609-7.97 15.782-11.85-4.528-5.494-11.565-7.435-18.779-4.93-7.945 2.758-14.074 7.88-16.302 16.219-1.347 5.043-4.304 3.29-7.248 2.842-3.66-.556-3.902-2.829-3.183-5.872 3.525-14.926 21.209-26.913 37.505-25.34 14.366 1.386 27.321 16.004 27.817 31.388.428 13.292-9.071 26.192-22.399 30.418-12.503 3.964-26.74-1.267-34.183-12.405-1.637-2.45-1.5-4.002.988-5.765 6.655-4.714 13.16-9.64 20.002-14.705m10.836 3.4c-6.091 4.505-12.182 9.01-18.223 13.476 4.578 7.227 14.96 8.49 22.81 3.265 8.817-5.868 11.538-16.357 6.067-24.197-3.679 1.857-6.905 4.407-10.654 7.456zM718.524 348.077c12.378 4.6 19.635 13.378 21.552 25.757 2.01 12.981-3.868 22.836-14.527 30.138-3.048 2.088-4.798 1.71-6.742-1.494-6.39-10.528-13.009-20.918-19.608-31.318-1.218-1.92-2.058-4.19-4.153-5.43-6.242 3.988-8.288 12.358-5.107 20.914 2.563 6.894 6.975 12.26 14.055 14.61 4.348 1.443 3.501 3.78 2.559 6.91-1.036 3.44-2.725 4.625-6.232 3.294-12.92-4.904-19.94-14.866-22.524-27.782-5.194-25.965 22.698-42.084 40.727-35.6m-7.983 10.105c-2.449.11-5.004-.1-7.11 2.586 6.31 9.936 12.17 20.254 19.109 29.871 5.623-3.47 8.336-10.677 6.81-17.16-2.104-8.947-8.505-14.392-18.81-15.297zM377.124 696.97c15.796 21.472-.676 49.343-23.562 50.999-11.205.81-24.06-6.45-29.885-17.48-5.173-9.798-3.586-23.66 3.443-32.523 2.026-2.555 3.603-2.093 5.828-.518 10.871 7.698 21.8 15.313 32.723 22.939 1.07.746 1.995 1.806 3.44 1.858 3.519-4.098 3.76-11.301.077-17.03-4.886-7.603-11.776-12.334-21.1-12.022-4.348.145-5.242-1.547-5.548-5.444-.355-4.508 1.841-5.644 5.496-5.641 12.053.01 21.24 5.771 29.088 14.863m-26.573 24.019c-4.348-3.073-8.715-6.119-13.035-9.23-2.723-1.96-4.28-1.618-5.388 1.835-3.75 11.676 7.498 24.496 20.637 23.258 4.375-.412 8.274-1.873 11.101-6.253-4.423-3.21-8.568-6.218-13.315-9.61zM767.007 525.091c-5.608 3.942-11.527 5.804-17.983 6.281-3.912.29-5.22-1.336-5.348-5.162-.435-12.958-1.143-25.907-1.794-38.857-.072-1.434.296-3.024-.909-4.222-7.851.999-13.905 7.948-14.656 16.971-.587 7.054.705 13.658 5.659 19.04 3.333 3.62-.518 4.781-2.082 6.7-1.761 2.16-3.491 2.492-5.815.33-10.707-9.965-11.475-33.664-1.336-45.617 10.797-12.728 30.982-14.713 44.207-4.348 13.225 10.365 15.701 29.655 5.6 43.388-1.495 2.031-3.163 3.854-5.543 5.496m-14.587-8.436c1.325 3.73 3.812 1.834 5.646.885 7.077-3.665 10.159-9.652 9.914-17.597-.248-8.058-4.107-13.536-11.372-16.671-4.29-1.851-5.415-1.11-5.293 3.602.252 9.653.689 19.3 1.105 29.781zM484.01 272.596c-4.607 17.004-19.638 25.4-34.98 24.248-16.794-1.262-28.13-13.942-29.172-31.274-1.077-17.924 15.49-32.854 34.924-32.23 15.908.511 33.15 14.969 29.228 39.256m-17.286 7.643c7.051-7.828 6.978-16.572 2.859-25.538-3.374-7.345-11.099-11.218-19.411-10.336-8.518.905-14.865 6.165-16.951 14.05-2.454 9.275.756 19.04 7.917 24.086 7.219 5.087 16.472 4.435 25.586-2.262zM706.487 619.447c-10.883-14.497-8.528-33.704 5.367-46.015 11.299-10.01 30.89-8.814 42.84 2.616 11.924 11.405 11.608 32.537-.684 45.664-11.575 12.361-31.121 12.887-44.094 1.17-1.11-1.003-2.127-2.108-3.429-3.435m40.744-6.734c9.565-13.158 5.26-27.949-9.54-32.786-9.406-3.073-19.01.008-23.813 7.64-5.193 8.255-4.492 17.763 1.912 24.346 7.627 7.84 22.66 10.376 31.44.8zM719.855 426.834l34.61-29.817c5.529 6.3 5.489 10.534.023 15.266-10.321 8.935-20.718 17.781-31.078 26.672-.852.731-2.09 1.148-2.245 3.221 4.47.496 8.98 1.02 13.495 1.493 10.93 1.142 21.868 2.217 32.792 3.406 4.786.521 6.714 3.856 6.78 11.623-6.14.38-12.15-1.037-18.191-1.6-14.407-1.344-28.76-3.257-43.163-4.646-3.806-.367-5.609-1.965-6.513-5.52-.903-3.546-2.562-6.739 1.534-9.72 4.156-3.024 7.811-6.737 11.956-10.378zM729.59 541.262c22.405 3.55 44.375 7.08 66.378 10.385 4.964.746 3.416 4.036 3.165 6.755-.25 2.722-.167 5.874-4.708 5.166-17.245-2.687-34.52-5.187-51.78-7.784-8.375-1.26-16.714-2.798-25.12-3.792-5.067-.6-4.454-3.476-3.883-6.982.55-3.384 1.006-6.312 5.663-5.32 3.244.693 6.572.995 10.285 1.572zM404.073 247.388c.635 1.375 1.006 2.503 1.61 3.487 1.983 3.23 1.306 5.024-2.239 6.896-9.013 4.76-11.97 12.027-8.508 21.782 3.278 9.236 7.157 18.293 11.345 27.158 2.385 5.05-1.078 5.481-4.014 6.897-3.123 1.506-5.563 2.515-7.435-2.002-6.432-15.527-13.247-30.895-19.849-46.352-2.765-6.474-2.693-6.518 4.012-9.214 1.065-.428 2.192-.7 3.197-1.013 2.185 1.266 2.314 3.77 4.415 5.952 2.3-6.364 6.549-10.817 12.16-13.883 1.578-.862 3.436-2.679 5.306.292zM597.271 760.16c4.511-6.223 3.918-12.483 1.3-18.782-3.451-8.3-6.769-16.672-10.657-24.766-2.313-4.814.834-5.566 3.848-7.152 3.393-1.786 5.611-1.833 7.352 2.28 6.617 15.634 13.478 31.165 20.266 46.726 1.375 3.15 2.908 5.934-2.025 7.818-3.983 1.522-7.182 2.935-8.668-2.671-.11-.413-.574-.732-1.1-1.368-2.594 6.275-6.773 10.858-12.44 14.076-1.989 1.13-4.403 2.31-5.163-.89-.707-2.97-5.666-6.131-.419-9.246 2.75-1.632 5.385-3.3 7.706-6.026zM508.433 265.353c-.083 7.633-.373 14.802-.153 21.955.155 5.037-2.739 5.114-6.411 5.061-3.513-.05-6.433-.268-6.002-4.98 1.624-17.762.202-35.62 1.682-53.402.404-4.853 3.475-3.934 6.327-4.044 3.102-.12 5.596.305 5.477 4.485-.29 10.151.1 20.322-.92 30.925zM499.01 205.942c5.86-2.625 10.484-1.493 12.154 2.802 1.343 3.454.757 6.673-2.246 8.964-3.09 2.358-6.607 2.452-9.73.156-2.963-2.178-3.971-5.283-2.408-8.83.457-1.036 1.27-1.915 2.23-3.092z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);