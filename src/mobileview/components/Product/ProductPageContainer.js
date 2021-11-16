import ProductPage from "./ProductPage";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { GetPdpPageItems, GetPdpPageSellerDetails, GetPdpPageAlternatives} from "../../../common/action";
import "./css/ProductStyles.css";

const mapStateToProps = (state: State) => ({
  pdpPageItemsResult: state.pdpPageItemsResult,
  pdpPageSellerDetailsResult: state.pdpPageSellerDetailsResult,
  pdpPageAlternativesResult : state.pdpPageAlternativesResult,
});

const mapDispatchToProps = (dispatch: any) => ({
  GetPdpPageItems: (itemCode: string) => dispatch(GetPdpPageItems(itemCode)), 
  GetPdpPageSellerDetails: (itemCode: string) => dispatch(GetPdpPageSellerDetails(itemCode)),
  GetPdpPageAlternatives: ( c_cont_code: string, limitNumber: number) => dispatch ( GetPdpPageAlternatives(c_cont_code, limitNumber))
});

export const ProductPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
