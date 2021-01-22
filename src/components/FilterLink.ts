import { connect } from 'react-redux';
import { setVisibilityFilter } from 'Utils/actions';
import { Link } from 'Src/components/view/Link';
import IKeyable from 'Utils/defs/IKeyable';

const mapStateToProps = (state: IKeyable, ownProps: IKeyable): { active: boolean } => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: IKeyable): { onClick: () => void } => {
  return {
    onClick: (): void => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
