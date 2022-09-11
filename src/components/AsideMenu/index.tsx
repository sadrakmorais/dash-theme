import {
  FaHome,
  FaCreditCard,
  FaChartLine,
  FaUsers,
  FaBitcoin,
} from 'react-icons/fa';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { MdPalette } from 'react-icons/md';
import * as S from './styles';

export function AsideMenu() {
  return (
    <S.Wrapper>
      <nav>
        <button>
          <FaHome />
        </button>
        <button>
          <FaCreditCard />
        </button>
        <button>
          <FaChartLine />
        </button>
        <button>
          <FaUsers />
        </button>
        <button>
          <FaBitcoin />
        </button>
      </nav>
      <div className="divider" />
      <nav>
        <button>
          <MdPalette />
        </button>
        <button>
          <AiFillSetting />
        </button>

        <button>
          <AiOutlineLogout />
        </button>
      </nav>
    </S.Wrapper>
  );
}
