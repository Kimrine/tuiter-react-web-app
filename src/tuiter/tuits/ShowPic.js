const ShowPic = ({
                     pic = ''
                 }) => {
    if(pic === '') {
        return(<div> </div>);
    } else {
        return(
            <img
                src={pic}
                className="wd-post-image"
            />
        )
    }
};

export default ShowPic;