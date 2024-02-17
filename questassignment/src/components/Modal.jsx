import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Text,
} from "@chakra-ui/react";

export default function Modalq({ ele }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<img
				onClick={onOpen}
				className="badges-image"
				src={ele.imageUrl}
				alt=""
			/>

			<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<div className="modal-body">
							<div className="modal-image-container">
								<img className="badges-image" src={ele.imageUrl} alt="" />
							</div>
							<div className="text-container">
								<Text style={{ font: "bold" }}>Badge Unlocked!🏆</Text>
								<Text>🎉 Level Up! Earned a shiny new badge! 🥇✨</Text>
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
