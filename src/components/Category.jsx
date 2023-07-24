export const Category = ({ categories, game }) => {
  return (
    <div>
      {Object.keys(categories).map((categoryKey) => {
        const category = categories[categoryKey];
        const actionClasses = Object.keys(category);

        if (categoryKey === game) {
          return (
            <div key={categoryKey}>
              {actionClasses.map((actionClass) => {
                const action = category[actionClass];
                return (
                  <div key={actionClass}>
                    <p>
                      class({actionClass}): - {action.text}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};
