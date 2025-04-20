

const Card = ({title, bg, desc}) => {

    const textColor = bg === 'primary' ? 'text-tan' : 'text-brown'
    const descColor = bg === 'primary' ? 'text-white' : 'text-dark-brown'

  return (
    <>
    <div className={`bg-${bg} rounded-lg px-6 py-4`}>
        <h2 className={`${textColor} uppercase font-primary text-xl lg:text-2xl mb-2`}>{title}</h2>
        <p className={`text-lg lg:text-xl ${descColor}`}>{desc}</p>
        </div></>
  )
}

export default Card