
import { renderComponent, branch } from 'recompose';
import LoadingScreen from '../../components/LoadingScreen';

const spinnerDuringLoading = branch(
  ({ loading }) => loading,
  renderComponent(LoadingScreen),
);

export default spinnerDuringLoading;
