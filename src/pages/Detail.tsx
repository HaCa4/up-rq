import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

/* COMPONENTS */
import DetailDescription from "../components/detailPage/DetailDescription";
import DetailHeader from "../components/detailPage/DetailHeader";
import { useQuery } from "react-query";
import axios from "../axios";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, status } = useQuery("singleProduct", () =>
    axios.get(`/products/${id}`).then((res) => res.data)
  );

  return (
    <div className="pageDiv">
      {status === "loading" && <p>Loading</p>}
      {status === "error" && <p>Error</p>}
      {status === "success" && (
        <>
          <DetailHeader product={data} />
          <br />
          <DetailDescription product={data} />
          <AiOutlineRollback onClick={() => navigate("/")} className="backIcon" />
        </>
      )}
    </div>
  );
};

export default Detail;
