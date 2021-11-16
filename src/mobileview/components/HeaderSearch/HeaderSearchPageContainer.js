import HeaderSearchPage from "./HeaderSearchPage";
import "./css/HeaderStyle.css";
import { connect } from "react-redux";
import { State } from "../../../rootReducer";
import { SearchByProduct, SearchBySeller, SearchByMolecule, SearchByMfc, 
    getProfileInfo, getBranchListAction, setDefaultBranch,  GetSearchParameters } from "../../../common/action";

const mapStateToProps = (state: State) => ({
    searchByProductResult: state.searchByProductResult, 
    searchBySellerResult: state.searchBySellerResult,
    searchByMoleculeResult: state.searchByMoleculeResult,
    searchByMfcResult: state.searchByMfcResult,
    getProfileInfoResult: state.getProfileInfoResult,
    branchListResult: state.branchListResult,
    defaultBranchResult: state.defaultBranchResult,
    searchParametersResult: state.searchParametersResult
});

const mapDispatchToProps = (dispatch: any) => ({
    SearchByProduct: (searchKey: string) => dispatch(SearchByProduct(searchKey)), 
    SearchBySeller: (searchKey: string) => dispatch(SearchBySeller(searchKey)),
    SearchByMolecule: (searchKey: string) => dispatch(SearchByMolecule(searchKey)),
    SearchByMfc: (searchKey: string) => dispatch(SearchByMfc(searchKey)),
    getProfileInfo: () => dispatch(getProfileInfo()),
    getBranchListAction: () => dispatch(getBranchListAction()),
    setDefaultBranch: (firmId: string) => dispatch(setDefaultBranch(firmId)),
    GetSearchParameters: ( searchObject : any) => dispatch (GetSearchParameters(searchObject))
});

export const HeaderSearchPageContainer =  connect (mapStateToProps,mapDispatchToProps)(HeaderSearchPage);
