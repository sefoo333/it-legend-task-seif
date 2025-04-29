
function Breadcrumb() {
  return (
<nav aria-label="Breadcrumb" className="">
  <ol className="flex items-center gap-1 text-sm text-gray-700">
    <li>
      <a href="#" className="block transition-colors hover:text-gray-900 text-[18px] font-medium"> Home </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
    <a href="#" className="block transition-colors hover:text-gray-900 text-[18px] font-medium"> Courses </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
    <a href="#" className="block transition-colors hover:text-gray-900 text-[18px] font-medium"> Courses Details </a>
    </li>
  </ol>
</nav>
  )
}

export default Breadcrumb
