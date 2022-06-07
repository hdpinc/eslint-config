/* eslint react/react-in-jsx-scope: "off" */
const Comp = () => {
  const count = Math.random() > 0.5 ? 1 : 0

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      { count && <span>There are {count} results</span> }
    </>
  )
}
