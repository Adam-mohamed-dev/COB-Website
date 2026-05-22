import { create } from 'zustand';

interface ConsultationState {
  selectedSolutions: string[];
  isFormOpen: boolean;
  addSolution: (slug: string) => void;
  removeSolution: (slug: string) => void;
  toggleSolution: (slug: string) => void;
  clearSolutions: () => void;
  setFormOpen: (open: boolean) => void;
}

export const useConsultationStore = create<ConsultationState>((set) => ({
  selectedSolutions: [],
  isFormOpen: false,
  addSolution: (slug) =>
    set((state) => ({
      selectedSolutions: state.selectedSolutions.includes(slug)
        ? state.selectedSolutions
        : [...state.selectedSolutions, slug],
    })),
  removeSolution: (slug) =>
    set((state) => ({
      selectedSolutions: state.selectedSolutions.filter((s) => s !== slug),
    })),
  toggleSolution: (slug) =>
    set((state) => ({
      selectedSolutions: state.selectedSolutions.includes(slug)
        ? state.selectedSolutions.filter((s) => s !== slug)
        : [...state.selectedSolutions, slug],
    })),
  clearSolutions: () => set({ selectedSolutions: [] }),
  setFormOpen: (open) => set({ isFormOpen: open }),
}));
