"use client";

import useListingModal from "@/app/_hooks/useListingModal";
import { useCallback, useState } from "react";

import Modal from "./Modal";

enum STEPS {
  PHOTOS = 0,
  LOCATION = 1,
  DETAILS = 2,
}

const STEPS_LABELS = ["Photos", "Location", "Details"];

type Props = {};

const ListingModal = (props: Props) => {
  const [step, setStep] = useState(STEPS.PHOTOS);
  const listingModal = useListingModal();
  const actionLabel = "Post";

  console.log(listingModal.isOpen);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const handleSubmit = useCallback(() => {}, []);

  const BodyTabs = (
    <>
      {STEPS_LABELS.map((label: string) => (
        <div>{label}</div>
      ))}
    </>
  );

  return (
    <Modal
      isOpen={listingModal.isOpen}
      title="Post a room"
      onClose={listingModal.onClose}
      onSubmit={step === STEPS.DETAILS ? handleSubmit : onNext}
      body={BodyTabs}
      actionLabel={actionLabel}
    />
  );
};

export default ListingModal;
