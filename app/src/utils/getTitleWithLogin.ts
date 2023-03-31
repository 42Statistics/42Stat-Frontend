import { UserTitle } from '@/__generated__/graphql';

export const getTitleWithLogin = (
  titles: (UserTitle | null)[],
  login: string,
) => {
  const TARGET = '%login';

  for (const title of titles) {
    if (title == undefined) continue;

    if (title.isSelected && title.name.includes(TARGET)) {
      return title.name.replace(TARGET, login);
    }
  }
  return login;
};
