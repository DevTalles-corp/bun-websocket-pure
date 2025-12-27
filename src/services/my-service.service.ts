import { MyStore } from '../store/my-store.store';
import { generateUuid } from '../utils/generate-uuid';

class MyService {
  private readonly myStore: MyStore;

  constructor() {
    this.myStore = new MyStore();
  }

  getAll() {
    return this.myStore.getAll();
  }

  add(name: string) {
    const newItem: unknown = {
      id: generateUuid(),
      name: name,
    };

    this.myStore.add(newItem);
    return newItem;
  }

  update(id: string, updates: Partial<unknown>): unknown | null {
    const item = this.myStore.findById(id);

    if (!item) {
      return null;
    }

    //! Actualizar el item según las actualizaciones

    return item;
  }

  delete(id: string) {
    return this.myStore.remove(id);
  }
}

export const myService = new MyService();
