import {Wrapper} from "./styled-index"

function Fixed() {
    return(
        <Wrapper>
        <a  href="tel:+998977501133">
        <box-icon name='phone-call' color='#ffffff'></box-icon>
        </a>
        <a  target={"_blank"} href="https://t.me/mirpotolkov">
        <box-icon  name='telegram' type='logo' color='#ffffff'></box-icon>
        </a>
        </Wrapper>
    )
}
export default Fixed