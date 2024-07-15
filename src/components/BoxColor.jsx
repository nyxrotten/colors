

function BoxColor ({colors, value}) {

 
  
  return (
    <>
      <div className='container'>
        {colors.map((color) =>
          <div className={`box ${color}`}
          key={color}
          id={(value === color) ? value : ""}>
            <h4>{(value === color) ? `I'm a color ${value}` : `I'm not a color ${value}`}</h4>
          </div>)
        }
      </div>
    </> 
  )
}
export default BoxColor;  
