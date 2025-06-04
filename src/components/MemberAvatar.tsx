import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface MemberAvatarProps {
  name: string;
  initials: string;
  size?: 'sm' | 'lg';
  className?: string;
}

export function MemberAvatar({ name, initials, size = 'lg', className = '' }: MemberAvatarProps) {
  const sizeClass = size === 'lg' ? 'w-20 h-20' : 'w-16 h-16';
  const textSizeClass = size === 'lg' ? 'text-lg' : 'text-base';
  
  return (
    <Avatar className={`${sizeClass} ${className}`}>
      <AvatarImage src="" alt={name} />
      <AvatarFallback className={`bg-primary text-primary-foreground ${textSizeClass} font-semibold`}>
        {initials}
      </AvatarFallback>
    </Avatar>
  );
} 