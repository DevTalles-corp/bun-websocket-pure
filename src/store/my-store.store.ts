interface MyStoreState {
  items: unknown[];
}

export class MyStore {
  private state: MyStoreState = {
    items: [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '3', name: 'Item 3' },
    ],
  };

  getAll(): unknown[] {
    return this.state.items;
  }

  findById(id: string): unknown | undefined {
    return this.state.items.find((item: any) => item.id === id);
  }

  add(item: unknown): void {
    this.state.items.push(item);
  }

  remove(id: string): boolean {
    const initialLength = this.state.items.length;
    this.state.items = this.state.items.filter((item: any) => item.id !== id);
    return this.state.items.length < initialLength;
  }

  reset(): void {
    this.state.items = [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '3', name: 'Item 3' },
    ];
  }
}
