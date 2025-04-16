import GridDistortion from "../react-bits/GridDistortion"

const Disortion = () => {
    return (
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <GridDistortion
                imageSrc="https://picsum.photos/1920/1080?grayscale"
                grid={100}
                mouse={0.27}
                strength={0.10}
                relaxation={0.9}
                className="custom-class"
            />

        </div>
    )
}

export default Disortion