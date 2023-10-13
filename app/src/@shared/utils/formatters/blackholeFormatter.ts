export const blackholeNameFormatter = (name: string): string => {
	if (name.length > 42) {
		return `${name.slice(0, 42)}...`;
	}
	return name;
};

export const blackholeValueFormatter = (value: number): string => {
  return `+${value.toLocaleString()}일`;
};
