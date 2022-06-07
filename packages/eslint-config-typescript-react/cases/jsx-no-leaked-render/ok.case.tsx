/* eslint react/react-in-jsx-scope: "off" */
const Comp = () => {
  const count = 0

  return (
    <>
      { count > 0 && <span>There are {count} results</span> }
    </>
  )
}
