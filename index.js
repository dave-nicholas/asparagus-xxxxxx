export default {
  resources: ["slot", "slot_groups"],
  reducer: (state, action) => {
    switch (action.type) {
      case "SLOT_SOMETHNG":
        return { ...state, slot: [...action.slots] };
      default:
        return state;
    }
  },
  component: () => {
    <div>slot component</div>;
  },
};
