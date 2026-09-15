export interface SuperadminLoginFormProps {
  onBack: () => void;
  onSubmit: (data: { username: string; password: string }) => void;
}
