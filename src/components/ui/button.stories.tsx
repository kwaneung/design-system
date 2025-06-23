import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'shadcn/ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'shadcn/ui의 Button 컴포넌트입니다. 다양한 variant와 size를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: '버튼의 시각적 스타일을 설정합니다',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: '버튼의 크기를 설정합니다',
    },
    asChild: {
      control: 'boolean',
      description: '자식 요소를 버튼으로 렌더링할지 설정합니다',
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성 상태를 설정합니다',
    },
    children: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// === Variant 스토리들 ===
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

// === Size 스토리들 ===
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const IconSize: Story = {
  args: {
    size: 'icon',
    children: '🚀',
  },
};

// === 상태 스토리들 ===
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: '로딩 중...',
  },
};

// === 조합 예제들 ===
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant를 한 번에 보여주는 예제입니다.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🚀</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 크기를 한 번에 보여주는 예제입니다.',
      },
    },
  },
};

// === 실제 사용 예제들 ===
export const PrimaryAction: Story = {
  args: {
    children: '로그인',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: '주요 작업(로그인, 제출 등)에 사용되는 버튼입니다.',
      },
    },
  },
};

export const SecondaryAction: Story = {
  args: {
    variant: 'outline',
    children: '취소',
  },
  parameters: {
    docs: {
      description: {
        story: '보조 작업(취소, 닫기 등)에 사용되는 버튼입니다.',
      },
    },
  },
};

export const DangerousAction: Story = {
  args: {
    variant: 'destructive',
    children: '계정 삭제',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: '위험한 작업(삭제, 파괴적 변경)에 사용되는 버튼입니다.',
      },
    },
  },
};

export const CallToAction: Story = {
  args: {
    size: 'lg',
    children: '지금 시작하기',
  },
  parameters: {
    docs: {
      description: {
        story: 'CTA(Call To Action) 버튼으로 사용하는 예제입니다.',
      },
    },
  },
};
