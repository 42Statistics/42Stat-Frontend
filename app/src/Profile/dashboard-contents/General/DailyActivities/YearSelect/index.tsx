import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Text,
} from '@shared/ui-kit';

type YearSelectProps = {
  list: number[];
  onChange: (year: number | null) => void;
};

export const YearSelect = ({ list, onChange }: YearSelectProps) => {
  const unit = '년';

  const handleChange = (year: string | null) => {
    onChange(year !== null ? +year : null);
  };

  return (
    <Select width="12rem" onValueChange={handleChange}>
      <SelectTrigger placeholder="최근 1년" />
      <SelectContent>
        <SelectItem value={null}>
          <Text>최근 1년</Text>
        </SelectItem>
        {list.map((year) => (
          <SelectItem key={year} value={year.toString()}>
            <Text>
              {year}
              {unit}
            </Text>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
