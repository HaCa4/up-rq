import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { InitialState } from "../utils/types/inRedux";

/* COMPONENTS */
import DetailDescription from "../components/detailPage/DetailDescription";
import DetailHeader from "../components/detailPage/DetailHeader";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getProductById } = bindActionCreators(actionCreators, dispatch);
  const product = useSelector((state: InitialState) => state.reducer.selectedProduct);

  useEffect(() => {
    getProductById(id);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="pageDiv">
      <DetailHeader product={product} />
      <br />
      <DetailDescription product={product} />
      <AiOutlineRollback onClick={() => navigate("/")} className="backIcon" />
    </div>
  );
};

export default Detail;
