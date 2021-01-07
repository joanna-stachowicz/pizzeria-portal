import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, updateAPI, getLoadingState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTables: (id, status) => dispatch(updateAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
