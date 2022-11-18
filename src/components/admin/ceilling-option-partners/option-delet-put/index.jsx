import { useContext, useEffect, useState } from "react";
import ModalDelete from "./Modal-delet";
import { Wrapper, SelectWrapper } from "./styled-index";
import ModalPut from "./modal-put";
import { RegionContext } from "../../../../context/client/region/context";
function OptionRegionDeletPutComponent({}) {
  const [open, SetOpen] = useState(false);
  const [open2, SetOpen2] = useState(false);
  const [DeletId, setDeleteId] = useState();
  const [PutBlog, setPutBlog] = useState();
  const [Elements, setElement] = useState();
  const { RegionMap } = useContext(RegionContext);
  useEffect(() => {
    RegionMap.map((elem) => setElement(elem));
  }, [Elements]);

  const HandleOpen = (e) => {
    SetOpen(true);
    setPutBlog(e.target.value);
  };
  const HandleClose = () => {
    SetOpen(false);
  };
  const HandleOpen2 = (e) => {
    SetOpen2(true);
    setDeleteId(e.target.value);
  };
  const HandleClose2 = () => {
    SetOpen2(false);
  };
  return (
    <Wrapper>
      <SelectWrapper>
        <select onChange={HandleOpen2}>
          <option selected disabled>
            Region Удалить
          </option>
          {RegionMap.map((elem, index) => (
            <option key={index} value={elem.id}>
              {elem.region_name_ru}
            </option>
          ))}
        </select>
        <select onChange={HandleOpen}>
          <option selected disabled>
            Region Изминеть
          </option>
          {RegionMap.map((elem, index) => (
            <option key={index} value={elem.id}>
              {elem.region_name_ru}
            </option>
          ))}
        </select>
      </SelectWrapper>
      <ModalDelete open={open2} HandleClose={HandleClose2} DeleteId={DeletId} />
      <ModalPut
        open={open}
        handleClose={HandleClose}
        Element={Elements}
        PutBlog={PutBlog}
      />
    </Wrapper>
  );
}
export default OptionRegionDeletPutComponent;
