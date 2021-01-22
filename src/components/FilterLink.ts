import { connect } from 'react-redux';
import { setVisibilityFilter } from 'Utils/actions';
import { Link } from 'Src/components/view/Link';
import ITodoObject from 'Utils/defs/ITodoObject';

const mapStateToProps = (
  state: { todos: ITodoObject[]; visibilityFilter: string },
  ownProps: { filter: string }
): { active: boolean } => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (
  dispatch: (action: { type: string; filter: string }) => void,
  ownProps: { filter: string }
): { onClick: () => void } => {
  return {
    onClick: (): void => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
