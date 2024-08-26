import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";

function PokemonDetail() {
  const param = useParams();
  const navigate = useNavigate();
  const detail = MOCK_DATA.find((pokemon) => parseInt(param.id) === pokemon.id);

  const onBackButtonHandler = () => {
    navigate("/dex");
  };

  return (
    <div>
      <img src={detail.img_url} />
      <h3>{detail.korean_name}</h3>
      <p>타입: {detail.types.join(", ")}</p>
      <span>{detail.description}</span>
      <button onClick={onBackButtonHandler}>뒤로 가기</button>
    </div>
  );
}

export default PokemonDetail;
